import axiosInstance, { handleAxiosError } from "@/lib/axiosInstance"
import type { ApiResponse, Event } from "@/lib/types";

export const getAllEvents = async () => {
  try {
    const res = await axiosInstance.get<ApiResponse<{ events: Event[] }>>("/events");
    return res.data
  } catch (err) {
    handleAxiosError(err)
  }
}

export const toggleRsvp = async (eventId: string) => {
  try {
    const res = await axiosInstance.patch<ApiResponse>(`events/${eventId}/rsvp`)
    return res.data
  } catch (err) {
    handleAxiosError(err)
  }
}

