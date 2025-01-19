import { apiUrl } from "@/config/api";
import { IEvent } from "@/types/IEvent";

export const mockEvents: IEvent[] = [
  {
    id: "1",
    name: "Front in Floripa",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    local: "Centro de Convenções de Florianópolis",
    description: "O maior evento de front-end de Santa Catarina",
    firstDay: "2024-05-15",
    lastDay: "2024-05-15",
    startTime: "09:00",
    subscriptionUrl: "https://frontinfloripa.com.br",
    formatedFirstDate: "15 de maio"
  },
  {
    id: "2",
    name: "DevOps Days Floripa",
    imageUrl: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    local: "CentroSul",
    description: "Evento sobre DevOps e cultura ágil",
    firstDay: "2024-06-10",
    lastDay: "2024-06-11",
    startTime: "08:30",
    subscriptionUrl: "https://devopsdaysfloripa.com.br",
    formatedFirstDate: "10 de junho"
  },
  {
    id: "3",
    name: "Python Floripa",
    imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    local: "UFSC - Universidade Federal de Santa Catarina",
    description: "Encontro da comunidade Python de Florianópolis",
    firstDay: "2024-07-20",
    lastDay: "2024-07-20",
    startTime: "14:00",
    subscriptionUrl: "https://pythonfloripa.org",
    formatedFirstDate: "20 de julho"
  },
  {
    id: "4",
    name: "Startup Weekend Floripa",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    local: "Celta Coworking",
    description: "54 horas para transformar ideias em startups",
    firstDay: "2024-08-05",
    lastDay: "2024-08-07",
    startTime: "18:00",
    subscriptionUrl: "https://startupweekendfloripa.com.br",
    formatedFirstDate: "5 de agosto"
  },
  {
    id: "5",
    name: "UX Conf Floripa",
    imageUrl: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    local: "Centro de Inovação ACATE",
    description: "Conferência sobre Experiência do Usuário",
    firstDay: "2024-09-12",
    lastDay: "2024-09-13",
    startTime: "09:00",
    subscriptionUrl: "https://uxconffloripa.com.br",
    formatedFirstDate: "12 de setembro"
  },
  {
    id: "6",
    name: "Agile Trends Floripa",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    local: "Hotel Majestic",
    description: "Conferência sobre metodologias ágeis",
    firstDay: "2024-10-20",
    lastDay: "2024-10-21",
    startTime: "08:00",
    subscriptionUrl: "https://agilefloripa.com.br",
    formatedFirstDate: "20 de outubro"
  }
];

interface GetAllActiveEventsOutputDto {
  status: number
  message?: string
  events?: IEvent[]
}

const oneHour = 3600

const mocks = {
  success: {
    status: 200,
    events: mockEvents
  }
}

export async function getEvents(): Promise<GetAllActiveEventsOutputDto> {

  return await new Promise(resolve => setTimeout(() => resolve(mocks.success), 1000 * 1))

  try {
    const response = await fetch(`${apiUrl}/event/getAll`, {
      cache: "force-cache",
      next: {
        revalidate: oneHour * 24,
        tags: ["getAllActiveEvents"],
      },
    });

    console.log('response getEvents', await response.json())

    if (!response.ok) {
      console.error('\n Erro ao buscar eventos: \n', response)
    }


    return await response.json()
  } catch (error) {
    return {
      status: 500,
      message: 'getEvents requests error'
    }
  }
}
