import { createMutation } from "react-query-kit";
import {
  SchoolboyRateDelete,
  SchoolboyRateUpdate,
} from "../interfaces/request/RateAPI.ts";
import {
  deleteSchoolboyRate,
  updateSchoolboyRate,
} from "../services/api/schoolboy-rate.api.ts";
import { AppQueryClient } from "../services/query-client.ts";
import {
  useAllSchoolboyRates,
  useAllSchoolboyRatesBySchoolboyId,
} from "../queries/schoolboy-rate.query.ts";
import { SchoolboyRate } from "../interfaces/entity/SchoolboyRate.ts";

const qc = AppQueryClient.get();
export const useUpdateSchoolboyRate = createMutation<void, SchoolboyRateUpdate>(
  {
    mutationFn: async (req) => {
      return updateSchoolboyRate(req);
    },
    onMutate: async (req) => {
      // Cancel all outgoing queries
      await qc.cancelQueries({ queryKey: useAllSchoolboyRates.getKey() });
      await qc.cancelQueries({
        queryKey: useAllSchoolboyRatesBySchoolboyId.getKey({
          ClassName: req.ClassName,
          SchoolboyId: req.SchoolboyId,
        }),
      });

      // const newRate: SchoolboyRate = {};

      const previousSchoolboyRates = qc.getQueryData(
        useAllSchoolboyRatesBySchoolboyId.getKey({
          ClassName: req.ClassName,
          SchoolboyId: req.SchoolboyId,
        }),
      );

      const updater = (oldData: SchoolboyRate[] | undefined) => {
        return oldData?.map((item) => {
          if (item.SchoolboyId === req.SchoolboyId) {
            return {
              ...item,
              Title: req.Title,
            };
          }
          return item;
        });
      };

      qc.setQueryData(useAllSchoolboyRates.getKey(), updater);

      qc.setQueryData(
        useAllSchoolboyRatesBySchoolboyId.getKey({
          ClassName: req.ClassName,
          SchoolboyId: req.SchoolboyId,
        }),
        updater,
      );

      return { previousSchoolboyRates, req };
    },
    onSettled: (_, error, req) => {
      console.log("onSettled useUpdateSchoolboyRate", req, error);
      void qc.invalidateQueries({
        queryKey: useAllSchoolboyRates.getKey(),
      });
      void qc.invalidateQueries({
        queryKey: useAllSchoolboyRatesBySchoolboyId.getKey({
          ClassName: req.ClassName,
          SchoolboyId: req.SchoolboyId,
        }),
      });
    },
  },
);

export const useDeleteSchoolboyRate = createMutation<void, SchoolboyRateDelete>(
  {
    mutationFn: async (req) => {
      return deleteSchoolboyRate(req);
    },
    onMutate: async (req) => {
      // Cancel all outgoing queries
      await qc.cancelQueries({ queryKey: useAllSchoolboyRates.getKey() });
      await qc.cancelQueries({
        queryKey: useAllSchoolboyRatesBySchoolboyId.getKey(),
      });

      const previousSchoolboyRates = qc.getQueryData(
        useAllSchoolboyRatesBySchoolboyId.getKey({
          ClassName: req.ClassName,
          SchoolboyId: req.SchoolboyId,
        }),
      );

      const updater = (oldData: SchoolboyRate[] | undefined) => {
        return oldData?.filter((item) => item.ColumnId !== req.ColumnId);
      };

      qc.setQueryData(useAllSchoolboyRates.getKey(), updater);
      qc.setQueryData(
        useAllSchoolboyRatesBySchoolboyId.getKey({
          ClassName: req.ClassName,
          SchoolboyId: req.SchoolboyId,
        }),
        updater,
      );

      return { previousSchoolboyRates };
    },
    onSettled: (_, error, req) => {
      console.log("onSettled useDeleteSchoolboyRate", req, error);
      void qc.invalidateQueries({
        queryKey: useAllSchoolboyRates.getKey(),
      });
      void qc.invalidateQueries({
        queryKey: useAllSchoolboyRatesBySchoolboyId.getKey({
          ClassName: req.ClassName,
          SchoolboyId: req.SchoolboyId,
        }),
      });
    },
  },
);
