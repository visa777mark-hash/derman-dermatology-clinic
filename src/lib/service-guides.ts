export const partnershipMilestones = [
  { percent: 50, event: 'case-initiation', label: 'Upon case initiation' },
  { percent: 50, event: 'permit-issued-and-verified', label: 'Upon official work permit issuance and verification' },
] as const;

export const countryGuides = {
  poland: {
    permit: 'Employer-sponsored work permit & National D-visa',
    guidance: 'Coordinate the employer’s work permit application and signed employment terms before preparing the national D-visa file. The applicable permit route depends on the role and applicant’s status.',
    submission: 'For Poland, confirm the competent Polish consulate and its current national visa appointment channel before preparing your submission.',
  },
  'czech-republic': {
    permit: 'Employee Card & seasonal work routes',
    guidance: 'Review the vacancy, employment contract and accommodation evidence for the relevant Employee Card or seasonal route. Eligibility and appointment availability must be checked before filing.',
    submission: 'For the Czech Republic, verify mission-specific Employee Card appointment rules and any applicable nationality or programme restrictions.',
  },
  slovakia: {
    permit: 'Employment-based temporary residence & national visa, where applicable',
    guidance: 'Coordinate employer and labour-office documents for the applicable employment-based residence procedure. Confirm whether a national visa is required for the selected route.',
    submission: 'For Slovakia, check the consulate’s residence submission checklist, translation requirements and validity periods for official certificates.',
  },
  ukraine: {
    permit: 'Employer work permit & temporary residence',
    guidance: 'Prepare employer work permit documentation and review the subsequent visa and temporary residence steps where applicable. Current entry, security and consular conditions require individual confirmation.',
    submission: 'For Ukraine, confirm that the relevant diplomatic mission accepts your application and check current entry and residence procedures before making travel plans.',
  },
  albania: {
    permit: 'Employment-based single work & residence authorization',
    guidance: 'Review the employment contract and supporting documents for the applicable single-permit procedure. Entry visa requirements and residence eligibility depend on nationality and current status.',
    submission: 'For Albania, confirm the official application channel and whether a separate entry visa submission is needed before proceeding with residence formalities.',
  },
  serbia: {
    permit: 'Single work & temporary residence permit',
    guidance: 'Coordinate the employer’s documents for the single-permit procedure and review whether a D-visa is needed before entry. Confirm the appropriate online or consular submission path for your situation.',
    submission: 'For Serbia, verify the official single-permit requirements and any D-visa checklist with the competent Serbian mission.',
  },
  'north-macedonia': {
    permit: 'Employment authorization, residence & D-visa support',
    guidance: 'Review employer approvals and the relevant employment-based residence procedure before preparing visa documents. The sequence of approvals and entry requirements must be confirmed for the individual case.',
    submission: 'For North Macedonia, confirm the employment-related residence and long-stay visa submission sequence with the competent mission.',
  },
  belarus: {
    permit: 'Employment authorization & temporary residence',
    guidance: 'Coordinate employer employment authorization documents and review the applicable visa and residence requirements. Current consular service availability and entry conditions should be checked individually.',
    submission: 'For Belarus, verify current consular acceptance, visa requirements and document certification rules before arranging an appointment.',
  },
  germany: {
    permit: 'Skilled employment & eligible shortage occupation routes',
    guidance: 'Review the job offer, qualifications and any recognition or professional licensing requirements. The appropriate skilled employment route depends on the occupation and applicant’s credentials.',
    submission: 'For Germany, confirm the relevant national employment visa checklist and whether qualification recognition or additional employment approval is required.',
  },
  france: {
    permit: 'Employer work authorization & long-stay employment visa',
    guidance: 'Coordinate the employer’s work authorization where required, then prepare the relevant long-stay employment visa file. Contract duration and job category determine the supporting documentation.',
    submission: 'For France, review the France-Visas checklist and use only the submission provider or embassy channel designated for your country of residence.',
  },
  spain: {
    permit: 'Initial employed work & residence authorization',
    guidance: 'Review employer work and residence authorization requirements before preparing the corresponding visa file. The role, employer and applicant’s status determine the applicable procedure.',
    submission: 'For Spain, verify the employment visa checklist with the competent Spanish consulate after the relevant authorization is available.',
  },
  greece: {
    permit: 'Seasonal & agricultural employment visa routes',
    guidance: 'Coordinate employer invitation and approval documents for the relevant seasonal or agricultural route. Confirm contract duration, accommodation requirements and any applicable admission conditions.',
    submission: 'For Greece, check the mission’s employment visa checklist and the employer approval required for the specific seasonal application.',
  },
} as const;