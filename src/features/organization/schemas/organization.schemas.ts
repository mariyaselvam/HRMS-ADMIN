import { z } from 'zod';

export const departmentSchema = z.object({
  name: z.string().min(2, 'Department name must be at least 2 characters'),
  managerId: z.string().optional(),
  workLocationId: z.string().nullable().optional(),
});

export type DepartmentFormData = z.infer<typeof departmentSchema>;

export const locationSchema = z.object({
  name: z.string().min(2, 'Location name must be at least 2 characters'),
  address: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export type LocationFormData = z.infer<typeof locationSchema>;

export const holidaySchema = z.object({
  name: z.string().min(2, 'Holiday name is required'),
  date: z.string().min(1, 'Date is required'),
  isOptional: z.boolean().default(false),
  workLocationId: z.string().nullable().optional(),
});

export type HolidayFormData = z.infer<typeof holidaySchema>;

export const shiftSchema = z.object({
  name: z.string().min(2, 'Shift name is required'),
  startTime: z.string().min(1, 'Start time is required'),
  endTime: z.string().min(1, 'End time is required'),
  breakDurationMinutes: z.number().min(0).optional(),
});

export type ShiftFormData = z.infer<typeof shiftSchema>;
