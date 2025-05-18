export interface ApiResponse<T = undefined> {
  message: string,
  data?: T
}

export interface Event {
  _id:string,
  title: string,
  description: string,
  date: Date,
  rsvpList: string[],
  isUserRsvped: boolean,
}
