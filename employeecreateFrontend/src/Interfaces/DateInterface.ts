import { useState } from "react";

export interface DateFormData {
    day: string;
    month: string;
    year: string;
  }
  
  export const DateInputForm = () => {
    const [formData, setFormData] = useState<DateFormData>({
      day: '',
      month: '',
      year: '',
    })
}