import { contacts, newsletters, type Contact, type InsertContact, type Newsletter, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private contactIdCounter: number;
  private newsletterIdCounter: number;

  constructor() {
    this.contacts = new Map();
    this.newsletters = new Map();
    this.contactIdCounter = 1;
    this.newsletterIdCounter = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactIdCounter++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = Array.from(this.newsletters.values()).find(
      (n) => n.email === insertNewsletter.email
    );
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const id = this.newsletterIdCounter++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
