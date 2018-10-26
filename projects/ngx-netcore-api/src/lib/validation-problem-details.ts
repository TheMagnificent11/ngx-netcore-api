export interface ValidationProblemDetails {
  readonly errors?: {[key: string]: string[]};
  type?: string;
  title?: string;
  /** format: int32 */
  status?: number;
  detail?: string;
  instance?: string;
}
