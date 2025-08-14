// types/udyam.ts
export interface ScrapedElement {
  tag: string;
  attributes?: Record<string, string | undefined>;
  text?: string;
  children?: ScrapedElement[];
}

export interface UdyamStep1Data {
  tag: string;
  attributes?: Record<string, string | undefined>;
  text?: string;
  children: ScrapedElement[];
}
