import { AxiosError } from 'axios';
import { toast } from 'sonner';

/**
 * Handles server errors by logging them and displaying an appropriate error message.
 * It checks for specific error conditions and displays a user-friendly message.
 *
 * @param {unknown} error - The error object received from the server.
 */
export function handleServerError(error: unknown) {
  // eslint-disable-next-line no-console
  console.log(error);

  let errMsg = 'Something went wrong!';

  if (error && typeof error === 'object' && 'status' in error && Number(error.status) === 204) {
    errMsg = 'Content not found.';
  }

  if (error instanceof AxiosError) {
    errMsg = error.response?.data.message;
  }

  toast.error(errMsg);
}
