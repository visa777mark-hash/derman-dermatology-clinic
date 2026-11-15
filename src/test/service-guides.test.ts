import { describe, expect, it } from 'vitest';
import { partnershipMilestones, countryGuides } from '@/lib/service-guides';
import { destinations } from '@/lib/destinations';

describe('Partnership milestone terms', () => {
  it('requires 50% upon case initiation', () => {
    expect(partnershipMilestones.find(item => item.event === 'case-initiation')?.percent).toBe(50);
  });
  it('requires 50% only upon official permit issuance and verification', () => {
    expect(partnershipMilestones.find(item => item.event === 'permit-issued-and-verified')?.percent).toBe(50);
  });
});

describe('Country guide coverage', () => {
  it('covers all twelve destinations from the shared catalogue', () => {
    expect(Object.keys(countryGuides)).toEqual(destinations.map(item => item.slug));
  });
});