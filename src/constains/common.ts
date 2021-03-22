export enum UserAccessStatus {
  NOSTATUS = 'NOSTATUS',
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum UserStatus {
  LOCK = 'LOCK',
  UNLOCK = 'UNLOCK',
}

export enum UserRole{
  BASIC = 'BASIC',
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  STOREOWNER = 'STOREOWNER',
}

export enum SortDirection {
  asc = 'ASC',
  desc = 'DESC',
}

export const sortDirection = [SortDirection.asc, SortDirection.desc]