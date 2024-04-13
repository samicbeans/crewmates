import { createClient } from '@supabase/supabase-js'

const URL = 'https://tnohpqhubbjsgxwfkoac.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRub2hwcWh1YmJqc2d4d2Zrb2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDE2MzEsImV4cCI6MjAyODQxNzYzMX0.c3uilAcJThDc8znaTC8V-UjFr-n-h1hkJHx6uqnCuFQ'
export const supabase = createClient(URL, API_KEY);