import { describe, expect, it } from 'vitest';
import { destinations, processingTime } from '@/lib/destinations';

describe('Destination processing ranges', () => {
  const expected = [
    ['poland', 30, 45], ['czech-republic', 21, 30], ['slovakia', 60, 90],
    ['ukraine', 14, 21], ['albania', 60, 90], ['serbia', 14, 21],
    ['north-macedonia', 30, 45], ['belarus', 30, 60], ['germany', 45, 60],
    ['france', 60, 90], ['spain', 60, 90], ['greece', 60, 90],
  ] as const;
  for (const [slug, min, max] of expected) {
    it(`${slug} uses the specified day range`, () => {
      const destination = destinations.find(item => item.slug === slug);
      expect(destination?.days).toEqual([min, max]);
      expect(processingTime([min, max])).toBe(`${min}–${max} Days`);
    });
  }
  it('contains exactly the twelve requested destinations in order', () => {
    expect(destinations.map(item => item.slug)).toEqual(expected.map(item => item[0]));
  });
});