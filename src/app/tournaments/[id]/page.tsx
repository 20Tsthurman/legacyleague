// Remove "use client" from the top - this will be in a separate file

import React from 'react';
import { notFound } from 'next/navigation';
import TournamentDetailClient from './TournamentDetailClient';
import { tournamentData } from './tournamentData'; // Import tournamentData

interface TournamentPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(tournamentData).map((id) => ({
    id,
  }));
}

export default async function TournamentPage({ params }: TournamentPageProps) {
  const { id } = await params;
  const tournament = tournamentData[id as keyof typeof tournamentData];

  if (!tournament) {
    notFound();
  }

  return <TournamentDetailClient tournament={tournament} />;
}