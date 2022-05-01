import { supabase } from './supabase.environment';

export const environment = {
  production: false,
  ...supabase
};
