

import React from "react";
import {
  useParams
} from "react-router-dom";
import NotFound from "../404";

import PageTemplate from "../common/PageTemplate";

import { capitalize } from "../common/util";

export default function DomainHome(){
  let { domainName } = useParams<{ domainName: string }>();

  if(!domainName){
    return <NotFound msg="No such domain name" />
  }

  return (
    <PageTemplate>
      <h2>Domain - {capitalize(domainName)}</h2>
    </PageTemplate>
  );
}