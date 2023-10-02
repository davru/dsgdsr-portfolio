import { Pipe, PipeTransform } from '@angular/core';
import { Locales, TranslationService } from '../services/translation.service';
@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  constructor(private translationService: TranslationService) { }

  private UNITS: Record<string, number> = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: 24 * 60 * 60 * 1000 * 365 / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
  }

  private from(locale: Locales, d1: Date, d2?: Date) {
    const rtf = new Intl.RelativeTimeFormat(locale)
    const elapsed = d1.getTime() - (d2 || new Date()).getTime()

    // "Math.abs" accounts for both "past" & "future" scenarios
    for (const [u, msecs] of Object.entries(this.UNITS)) {
      if (Math.abs(elapsed) > msecs || u == 'second') {
        return rtf.format(Math.round(elapsed / msecs), u as Intl.RelativeTimeFormatUnit)
      }
    }
  }

  transform(value: number, locale: Locales = this.translationService.getLocale()): string {
    return this.from(locale, new Date(value), new Date());
  }
}