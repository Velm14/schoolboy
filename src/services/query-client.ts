import { QueryClient } from "@tanstack/react-query";

export class AppQueryClient {
  private static queryClient: QueryClient;
  public static instance: AppQueryClient;

  private constructor() {
    AppQueryClient.queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: 1000 * 60 * 60, // 1 hour,
        },
      },
    });
  }

  public static get(): QueryClient {
    if (!AppQueryClient.instance) {
      AppQueryClient.instance = new AppQueryClient();
    }
    return AppQueryClient.queryClient;
  }
}
