import { supabase } from './supabase.environment';

export const environment = {
  production: true,
  ...supabase
};
