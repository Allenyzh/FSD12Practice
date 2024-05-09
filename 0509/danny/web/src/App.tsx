import { Button, Table, InputGroup, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import CreateModal from "./pages/create";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  // const DEFAULT_URL = "http://localhost:8080/api/doctors";
  const DEFAULT_URL =
    "https://hdcola.github.io/FSD12Practice/0508/danny/web/dist/doctors";
  const [data, setData] = useState<[iDoctor] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiUrl, setApiUrl] = useState<string>(DEFAULT_URL);
  const [fetchDataToogle, setFetchDataToogle] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data...");
      setIsLoading(true);
      try {
        setData(null);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchDataToogle]);

  const handleCreateDoctor = (data: object) => {
    // cover data to iDoctor
    const doctorData = data as iDoctor;
    // POST to apiUrl
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctorData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("Success:", json);
        setFetchDataToogle(!fetchDataToogle);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setShowCreate(false);
  };

  const handleDeleteDoctor = (id: number) => {
    // DELETE to apiUrl
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // return response text
        return response.text();
      })
      .then((resp) => {
        console.log("Success:", resp);
        setFetchDataToogle(!fetchDataToogle);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowCreate(true)}>
        New Doctor
      </Button>
      <CreateModal
        show={showCreate}
        handleClose={() => setShowCreate(false)}
        handleSave={handleCreateDoctor}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Postal Code</th>
              <th>City</th>
              <th>Province</th>
              <th>Country</th>
              <th>Phone Number</th>
              <th>Specialty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((doctor: iDoctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.id}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.dateOfBirth}</td>
                  <td>{doctor.address}</td>
                  <td>{doctor.postalCode}</td>
                  <td>{doctor.city}</td>
                  <td>{doctor.province}</td>
                  <td>{doctor.country}</td>
                  <td>{doctor.phoneNumber}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteDoctor(doctor.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="API URL"
          aria-label="API URL"
          aria-describedby="basic-addon2"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFetchDataToogle(!fetchDataToogle);
            }
          }}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => setFetchDataToogle(!fetchDataToogle)}
        >
          Fetch Data
        </Button>
      </InputGroup>
    </>
  );
}

interface iDoctor {
  id: number;
  name: string;
  dateOfBirth: string;
  address: string;
  postalCode: string;
  city: string;
  province: string;
  country: string;
  phoneNumber: string;
  specialty: string;
}

export default App;
