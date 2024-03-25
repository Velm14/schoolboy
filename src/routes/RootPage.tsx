import { Breadcrumbs, Typography } from "@mui/material";
import { useQueries } from "@tanstack/react-query";
import { useAllSchoolboys } from "../queries/schoolboy.query.ts";
import { useAllClassColumns } from "../queries/class.query.ts";
import { SchoolboyTable } from "../components/schoolboy/SchoolboyTable";
import { useAllSchoolboyRates } from "../queries/schoolboy-rate.query.ts";
import {
  useDeleteSchoolboyRate,
  useUpdateSchoolboyRate,
} from "../mutators/schoolboy-rate.mutator.ts";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app-context.ts";

export const RootPage = () => {
  const navigate = useNavigate();
  const [currentClass] = useState("2");
  const appContext = useContext(AppContext);

  const { schoolboys, classColumns, rates, isLoading, isError } = useQueries({
    queries: [
      useAllSchoolboys.getOptions({ ClassName: currentClass }),
      useAllClassColumns.getOptions({ ClassName: currentClass }),
      useAllSchoolboyRates.getOptions({ ClassName: currentClass }),
    ],
    combine: (result) => {
      return {
        schoolboys: result?.[0]?.data || [],
        classColumns: result?.[1]?.data || [],
        rates: result?.[2]?.data || [],
        isLoading: result.some((r) => r.isLoading),
        isError: result.some((r) => r.isError),
      };
    },
  });

  useEffect(() => {
    if (isError) {
      appContext.setError("Error loading data");
      appContext.setIsSnackbarOpen(true);
    }
  }, [isError]);

  const updateRate = useUpdateSchoolboyRate();
  const deleteRate = useDeleteSchoolboyRate();

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginY: 2 }}>
        <Typography color="text.primary">
          Schoolboys class: {currentClass}
        </Typography>
      </Breadcrumbs>
      <SchoolboyTable
        isLoading={isLoading}
        schoolboys={schoolboys}
        classColumns={classColumns}
        rates={rates}
        onClickSchoolboy={(schoolboy) => {
          console.log("Schoolboy clicked", schoolboy);
          navigate(`/schoolboy/${currentClass}/${schoolboy.Id}`);
        }}
        onClickRate={(rateParams) => {
          const rate = rates.find(
            (r) =>
              r.SchoolboyId === rateParams.SchoolboyId &&
              r.ColumnId === rateParams.ColumnId,
          );
          console.log("Rate clicked", rateParams, rate);
          if (!rate) {
            updateRate.mutate({
              ClassName: "2",
              Title: "H",
              SchoolboyId: rateParams.SchoolboyId,
              ColumnId: rateParams.ColumnId,
            });
          } else {
            deleteRate.mutate({
              ClassName: "2",
              SchoolboyId: rateParams.SchoolboyId,
              ColumnId: rateParams.ColumnId,
            });
          }
        }}
      />
    </div>
  );
};
