import React, { useEffect, useState } from 'react';
import './App.css';
import NewReminder from './Components/NewReminder';
import ReminderList from "./Components/ReminderList"
import Reminder from './interfaces/interface';
import reminder from './Services/reminder';
import reminderService from './Services/reminder';

function App() {

  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders()
  }, [])

  const loadReminders = async () => {
    const reminder = await reminderService.getReminders()
    setReminders(reminder)
  }

  const removeReminder = (id: number) =>{
    const filteredReminder = reminders.filter(reminder => reminder.id !== id)
    setReminders(filteredReminder)
  }

  const addReminder = async (title: string) =>{
    const newReminder = await reminderService.addReminder(title)
    setReminders([newReminder, ...reminders])

  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder}/>
      <ReminderList items={reminders}  onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
