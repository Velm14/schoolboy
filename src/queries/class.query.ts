import { createQuery } from "react-query-kit";
import { ClassColumn } from "../interfaces/entity/ClassColumn.ts";
import { getAllClassColumns } from "../services/api/classes.api.ts";
import { ClassColumnGetAll } from "../interfaces/request/ClassAPI.ts";

export const useAllClassColumns = createQuery<ClassColumn[], ClassColumnGetAll>(
  {
    queryKey: ["classColumns"],
    fetcher: async ({ ClassName }) => {
      return getAllClassColumns({ ClassName });
    },
  },
);
