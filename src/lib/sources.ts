export const sources = ["Mail", "Contacts", "Calendar", "Notes"] as const;
type Source<T> = {
  fields: (keyof T)[];
  content: T[];
};

type Mail = {
  From: string;
  To: string;
  Subject: string;
  Body: string;
};

type Contact = {
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
};

type Calendar = {
  Date: string;
  Time: string;
  Title: string;
  Description: string;
};

type Note = {
  Title: string;
  Body: string;
};

export const all_sources: {
  Mail: Source<Mail>;
  Contacts: Source<Contact>;
  Calendar: Source<Calendar>;
  Notes: Source<Note>;
} = {
  Mail: {
    fields: ["From", "To", "Subject", "Body"],
    content: [
      {
        From: "Rebecca",
        To: "Jonas",
        Subject: "Hallo",
        Body: "Gute Nachricht.",
      },
    ],
  },
  Contacts: {
    fields: ["Name", "Email", "Phone", "Address"],
    content: [
      {
        Name: "Rebecca",
        Email: "Rebecca@me.com",
        Phone: "123456789",
        Address: "Somewhere",
      },
    ],
  },
  Calendar: {
    fields: ["Date", "Time", "Title", "Description"],
    content: [
      {
        Date: "2022-01-01",
        Time: "12:00",
        Title: "Rebecca treffen",
        Description: "Einen schönen Abend.",
      },
    ],
  },
  Notes: {
    fields: ["Title", "Body"],
    content: [
      {
        Title: "Meine Ideen",
        Body: "Gute Ideen.",
      },
    ],
  },
};
