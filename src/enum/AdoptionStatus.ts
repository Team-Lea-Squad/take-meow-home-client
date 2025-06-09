export enum AdoptionStatus {
  PRE_ADOPTION = "PRE_ADOPTION", // 분양전
  PendingApproval = "PENDING_APPROVAL", // 승인전 (집사 승인 단계)
  InProgress = "IN_PROGRESS", // 분양 예정
  Completed = "COMPLETED" // 분양완료
}

export const Status = {
  [AdoptionStatus.PRE_ADOPTION]: {
    code: AdoptionStatus.PRE_ADOPTION,
    name: "분양전",
    color: "#8D33FF"
  },
  [AdoptionStatus.InProgress]: {
    code: AdoptionStatus.InProgress,
    name: "분양예정",
    color: "#33FFF5"
  },
  [AdoptionStatus.PendingApproval]: {
    code: AdoptionStatus.PendingApproval,
    name: "승인전",
    color: "#33FFF5"
  },
  [AdoptionStatus.Completed]: {
    code: AdoptionStatus.Completed,
    name: "분양완료",
    color: "#33FFBD"
  }
};
