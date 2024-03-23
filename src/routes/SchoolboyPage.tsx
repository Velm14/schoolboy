import { useParams } from "react-router-dom";
import { useAllSchoolboys } from "../queries/schoolboy.query.ts";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { stringOrEmpty } from "../services/utils/string.formatter.ts";

export const SchoolboyPage = () => {
  const { id, classKey } = useParams<{ id: string; classKey: string }>();
  const schoolboys = useAllSchoolboys({
    variables: { ClassName: classKey as string },
  });
  const intId = parseInt(id || "-1");

  const schoolboy = schoolboys.data?.find((s) => s.Id === intId);
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginY: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Schoolboys class: {classKey}
        </Link>
        <Typography color="text.primary">Schoolboy Page {id}</Typography>
      </Breadcrumbs>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h3">Schoolboy Page {id}</Typography>
      </Box>
      <Card sx={{ maxWidth: 640, marginBottom: 2 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {stringOrEmpty(schoolboy?.FirstName)}{" "}
              {stringOrEmpty(schoolboy?.SecondName)}{" "}
              {stringOrEmpty(schoolboy?.LastName)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a voluptates, quos, quod, voluptate dolorum voluptatem quas
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button>
        <Link href="/">Go back</Link>
      </Button>
    </Box>
  );
};
