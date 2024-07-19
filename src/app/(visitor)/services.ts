'use server'

import { apiUrl } from "@/config/api";

export async function getEvents() {
  const response = await fetch(`${apiUrl}/event/getAllActiveEvents`, {
      cache: "force-cache",
      next: {
          revalidate: 60 * 60,
          tags: ["events"],
      },
  });

  console.log('response: ', response)

  if (!response.ok) {
      console.error('\n Erro ao buscar eventos: \n', response)
      return {events: []}
  }

  return await response.json();
}