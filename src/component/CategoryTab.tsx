import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem
} from "@material-ui/core";
import { ICategory } from "../utils/interface";
import { makeStyles } from "@material-ui/styles";
import ProductList from "./ProductList";

const useStyles = makeStyles({
  categoryTab: {
    borderRadius: "4px",
    height: "60px",
    width: "120px",
    color: "white",
    lineHeight: "60px",
    padding: "20px"
  }
});

const CategoryTab: React.FC = () => {
  const classes = useStyles();

  const [categories, setCategories] = useState({} as ICategory);
  const [value, setValue] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    fetch(
      "https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob"
    )
      .then(res => res.json())
      .then(res => setCategories(res))
      .catch(err => err);
  }, []);

  return (
    <div>
      <Typography variant="h6" align="left" style={{ padding: "16px" }}>
        {categories.heading}
      </Typography>

      <Tabs
        value={value}
        variant="scrollable"
        onChange={(e, newValue) => {
          setValue(newValue);
          setViewAll(false);
        }}
      >
        {categories.category_list &&
          categories.category_list.map((category, index) => (
            <Tab
              key={index}
              value={index}
              style={{ padding: "12px 6px" }}
              icon={
                <div
                  className={classes.categoryTab}
                  style={{
                    background: `url(${category.category_image})`,
                    backgroundSize: "cover"
                  }}
                >
                  {category.category_name}
                </div>
              }
            />
          ))}
      </Tabs>

      {categories.category_list && categories.category_list.length && (
        <ProductList
          categoryId={categories.category_list[value].category_id}
          viewAll={viewAll}
        />
      )}

      <Grid
        container
        alignItems="center"
        style={{ width: "100%", padding: "12px" }}
        spacing={3}
      >
        <Grid item style={{ width: "30%" }}>
          <Typography>Results for </Typography>
        </Grid>
        <Grid item style={{ width: "40%" }}>
          <Select
            fullWidth
            value={value}
            onChange={(event: React.ChangeEvent<{ value: any }>) => {
              setValue(event.target.value);
              setViewAll(false);
            }}
          >
            {categories.category_list &&
              categories.category_list.map((category, index) => (
                <MenuItem key={index} value={index}>
                  {category.category_name}
                </MenuItem>
              ))}
          </Select>
        </Grid>
        <Grid item style={{ width: "30%" }}>
          <Button
            onClick={() => {
              setViewAll(!viewAll);
            }}
          >
            {viewAll ? "[-] View less" : "[+] View more"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryTab;
