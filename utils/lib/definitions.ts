// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    role: "admin" | "applicant"
  };

// In TypeScript, this is called a string union type.
// It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
// status: 'pending' | 'paid';
// Typical application of this is in the 'role' property