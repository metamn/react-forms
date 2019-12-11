import React from "react";

import Form from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.min.css";

import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

const schema = {
  title: "Wakibi",
  type: "object",
  properties: {
    gender: {
      type: "string",
      title: "Gender",
      enum: ["Women", "Men"]
    },
    grouped: {
      type: "string",
      title: "Group",
      enum: ["Individual", "Group"]
    },
    location: {
      type: "object",
      title: "Location",
      properties: {
        northAmerica: {
          type: "array",
          title: "North America",
          items: {
            type: "string",
            enum: ["Canada", "Mexico", "US"]
          },
          uniqueItems: "true"
        },
        europe: {
          type: "array",
          title: "Europe",
          items: {
            type: "string",
            enum: ["France", "Italy", "UK"]
          },
          uniqueItems: "true"
        }
      }
    },
    sector: {
      type: "array",
      title: "Sector",
      items: {
        type: "number",
        enum: ["Agriculture", "Economy", "IT"]
      },
      uniqueItems: "true"
    },
    attributes: {
      type: "array",
      title: "Sector",
      items: {
        type: "number",
        enum: ["Green", "Higher Education", "Islamic Finance"]
      },
      uniqueItems: "true"
    },
    tags: {
      type: "array",
      title: "Tags",
      items: {
        type: "number",
        enum: ["Animals", "Elderly", "Unique", "Gabrics"]
      },
      uniqueItems: "true"
    },
    riskRating: {
      type: "integer",
      title: "Risk rating",
      minimum: 0,
      maximum: 5
    },
    profitability: {
      type: "integer",
      title: "Profitability",
      minimum: -55,
      maximum: 66
    }
  }
};

const uiSchema = {
  gender: {
    "ui:widget": "radio"
  },
  grouped: {
    "ui:widget": "radio"
  },
  location: {
    northAmerica: {
      "ui:widget": "checkboxes"
    },
    europe: {
      "ui:widget": "checkboxes"
    }
  },
  sector: {
    "ui:widget": "checkboxes"
  },
  attributes: {
    "ui:widget": "checkboxes"
  },
  tags: {
    "ui:widget": "checkboxes"
  },
  riskRating: {
    "ui:widget": "range"
  },
  profitability: {
    "ui:widget": "range"
  }
};

const log = type => console.log.bind(console, type);

const onChange = (event, location, history) => {
  const { formData } = event;
  console.log("fd:", formData);

  const newParams = queryString.stringify(formData);
  location.search = newParams;
  console.log("l:", location);
  history.push(location);
};

/**
 * Displays the component
 */
const JSONSchema = props => {
  const location = useLocation();
  const history = useHistory();

  //console.log("location:", location);
  console.log("qs:", queryString.parse(location.search));

  return (
    <div className="JSONSchema" style={{ padding: "1em", margin: "1em" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={event => onChange(event, location, history)}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    </div>
  );
};

export default JSONSchema;