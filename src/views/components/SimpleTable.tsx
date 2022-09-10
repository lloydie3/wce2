import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";


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


const SimpleTable = (data, columnHeaders) => {


  return (
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              {columnHeaders.map((c) => {
              return (<TableCell align="left">{c.title}</TableCell>)
              })}
            </TableRow>
          </TableHead>
          {/*<TableBody>*/}
          {/*  {subscribarList*/}
          {/*      .map((subscriber, index) => (*/}
          {/*          <TableRow key={index}>*/}
          {/*            <TableCell align="left">*/}

          {/*              <ValidatorForm onError={() => null}>*/}
          {/*              <TextField*/}
          {/*                  type="text"*/}
          {/*                  name="username"*/}
          {/*                  id="standard-basic"*/}
          {/*                  value={subscriber.company || ""}*/}
          {/*                  onChange={handleChange2}*/}
          {/*                  errorMessages={["this field is required"]}*/}
          {/*                  label="Username (Min length 4, Max length 9)"*/}
          {/*                  validators={["required", "minStringLength: 4", "maxStringLength: 9"]}*/}
          {/*              />*/}
          {/*              </ValidatorForm>*/}
          {/*            </TableCell>*/}
          {/*            <TableCell align="center">{subscriber.company}</TableCell>*/}
          {/*            <TableCell align="center">{subscriber.date}</TableCell>*/}
          {/*            <TableCell align="center">{subscriber.status}</TableCell>*/}
          {/*            <TableCell align="center">${subscriber.amount}</TableCell>*/}
          {/*            <TableCell align="right">*/}
          {/*              <IconButton>*/}
          {/*                <Icon color="error">close</Icon>*/}
          {/*              </IconButton>*/}
          {/*            </TableCell>*/}
          {/*          </TableRow>*/}
          {/*      ))}*/}
          {/*</TableBody>*/}
        </StyledTable>
      </Box>
  );
};

export default SimpleTable;
