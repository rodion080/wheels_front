export enum NavActive{
    // eslint-disable-next-line no-unused-vars
    PART_JOURNEYS = 'PART_JOURNEYS',
    // eslint-disable-next-line no-unused-vars
    ADMIN_JOURNEYS ='ADMIN_JOURNEYS',
    // eslint-disable-next-line no-unused-vars
    ADMIN = 'ADMIN',
}

export type TypeInitAccountMode = NavActive.ADMIN | NavActive.ADMIN_JOURNEYS | NavActive.PART_JOURNEYS
