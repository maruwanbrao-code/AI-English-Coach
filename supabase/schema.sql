-- ============================================================
-- AI English Coach — Supabase schema
-- ============================================================
-- Run this once in your Supabase project's SQL editor
-- (Dashboard → SQL Editor → New query → paste → Run).
--
-- Design notes:
--  - The app has NO login/signup. Each browser generates a random
--    "student_id" (a UUID) stored in localStorage and sends it with
--    every request as a plain text column value.
--  - Because there is no Supabase Auth session, Row Level Security
--    (RLS) cannot check "auth.uid() = student_id" the way a normal
--    logged-in app would. The policies below simply allow the
--    public "anon" key to read/write these three tables.
--  - This is a reasonable trade-off for a personal / single-user
--    learning tool, but it means ANYONE who has your project's
--    anon key (which is visible in your published front-end code,
--    by design) could read or write any row in these tables. Do
--    NOT put sensitive data in them, and do not reuse this schema
--    as-is for a multi-tenant product. If you later add real user
--    accounts (Supabase Auth), tighten these policies to
--    `using (auth.uid()::text = student_id)`.
-- ============================================================

create table if not exists profiles (
  student_id text primary key,
  current_track text,
  current_level text,
  updated_at timestamptz default now()
);

create table if not exists test_results (
  id bigint generated always as identity primary key,
  student_id text not null,
  level_awarded text not null,
  track_id text not null,
  score int not null,
  total_questions int not null,
  by_level jsonb,
  taken_at timestamptz not null default now()
);

create table if not exists progress (
  id bigint generated always as identity primary key,
  student_id text not null,
  track_id text not null,
  week_number int not null,
  status text not null check (status in ('locked', 'unlocked', 'passed')),
  best_score int,
  attempts int default 0,
  last_attempt_at timestamptz,
  unique (student_id, track_id, week_number)
);

create index if not exists idx_test_results_student on test_results (student_id);
create index if not exists idx_progress_student on progress (student_id);

alter table profiles enable row level security;
alter table test_results enable row level security;
alter table progress enable row level security;

-- Open policies (no-login app — see notes above).
drop policy if exists "anon full access profiles" on profiles;
create policy "anon full access profiles" on profiles
  for all using (true) with check (true);

drop policy if exists "anon full access test_results" on test_results;
create policy "anon full access test_results" on test_results
  for all using (true) with check (true);

drop policy if exists "anon full access progress" on progress;
create policy "anon full access progress" on progress
  for all using (true) with check (true);
