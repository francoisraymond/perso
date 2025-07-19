
export interface LangueType {
    langue: string
    lu: boolean
    parle: boolean
    ecrit: boolean
}

export interface CompetenceType {
  titre: string
  description: string
}

export interface ExperienceType {
  start: string
  end?: string
  ville: string
  poste: string
  entreprise: string
  responsabilites: string[]
  environnement_technique: string[]
}

export interface FormationType {
  annee: number
  diplome: string
  etablissement?: string
}


