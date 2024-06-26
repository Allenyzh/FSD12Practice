import React, { useState } from "react";
import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { ConfigProvider, App as AntdApp, Button } from "antd";
import { DoctorTable } from "./doctor-table";
// import CustomInput from "./components/CustomInput";
import { Select } from "antd";

const DEFAULT_API_URL =
  "https://hdcola.github.io/FSD12Practice/0505/danny/web/dist/";

export default function App() {
  const [apiUrl, setApiUrl] = useState(DEFAULT_API_URL);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <ConfigProvider>
      <AntdApp>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginRight: "10px" }}>API URL:</label>
          <Select
            showSearch
            placeholder="Select API URL"
            optionFilterProp="children"
            onChange={(value) => setApiUrl(value)}
            onSearch={(value) => setApiUrl(value)}
            options={[
              {
                value: DEFAULT_API_URL,
                label: DEFAULT_API_URL,
              },
              {
                value: "http://localhost:8080/api",
                label: "http://localhost:8080/api",
              },
            ]}
          />
          {/* <CustomInput
            options={[DEFAULT_API_URL, "http://localhost:8080/api"]}
            onInputChange={(value: string) => setApiUrl(value)}
          /> */}
          <Button onClick={handleRefresh}>Refresh</Button>
        </div>
        <Refine key={refreshKey} dataProvider={dataProvider(apiUrl)}>
          <DoctorTable />
        </Refine>
      </AntdApp>
    </ConfigProvider>
  );
}
