import { createClient } from '@supabase/supabase-js';

let supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY
)

export const setSupabaseSession = (session) => {
    supabase = session;
};

export const getSupabaseSession = () => {
    return supabase;
};
