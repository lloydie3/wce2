import {
  Box,
  Icon,
  IconButton,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import SimpleCard from "./SimpleCard";
import SimpleExpansionPanel from "./SimpleExpansionPanel";
import SimpleExpansionPanel2 from "./SimpleExpansionPanel2";


const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
];

const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange2 = (event) => {
    //const email = event.target.value;
    //this.setState({ email });
  }

  return (
      <>
      <Stack spacing={3}>
        <SimpleCard title="simple expansion panel">
          <SimpleExpansionPanel isAccordion />
        </SimpleCard>
      </Stack>
        <Stack spacing={3}>
          <SimpleCard title="simple expansion panel">
            <SimpleExpansionPanel2 />
          </SimpleCard>
        </Stack>
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">Wallet Address</TableCell>
              <TableCell align="center">Points</TableCell>
              <TableCell align="center">Daily Gain</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscribarList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">

                        <ValidatorForm onError={() => null}>
                        <TextField
                            type="text"
                            name="username"
                            id="standard-basic"
                            value={subscriber.company || ""}
                            onChange={handleChange2}
                            errorMessages={["this field is required"]}
                            label="Username (Min length 4, Max length 9)"
                            validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
                        />
                        </ValidatorForm>
                      </TableCell>
                      <TableCell align="center">{subscriber.company}</TableCell>
                      <TableCell align="center">{subscriber.date}</TableCell>
                      <TableCell align="center">{subscriber.status}</TableCell>
                      <TableCell align="center">${subscriber.amount}</TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <Icon color="error">close</Icon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                ))}
          </TableBody>
        </StyledTable>

        <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={subscribarList.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
        />
      </Box>
      </>
  );
};

export default PaginationTable;
