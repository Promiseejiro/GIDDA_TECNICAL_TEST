import { AddEstateBtn, SpaceCard } from "./components";
import {
  CalenderInput,
  CustomButton,
  CustomInput,
  Select,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../../api/request";
import { OptionsProps } from "../../../types";
import { useFormik } from "formik";
import { createEstateSchema } from "../../../Schema";
import moment from "moment";
import toast from "react-hot-toast";

export const CreateProperty = () => {
  const navigate = useNavigate();
  const [countryOptions, setCountryOptions] = useState<Array<OptionsProps>>([]);
  const [StateOptions, setStateOptions] = useState<Array<OptionsProps>>([]);
  const [cityOptions, setCityOptions] = useState<Array<OptionsProps>>([]);
  const [fetchingCountry, setFetchingCoutry] = useState(true);
  const [fetchingState, setFetchingState] = useState(false);
  const [fetchingCity, setFetchingCity] = useState(false);
  const [showAddDoc, setShowAddDoc] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      cityId: "",
      state: "",
      address: "",
      videoUrl: "",
      ownerType: "",
      description: "",
      completionStatus: "",
      completionDate: moment().toLocaleString(),
      country: "",
      landmark: "",
      completionLevel: 1,
      longitude: 0,
      latitude: 0,
      landSize: 0,
      floors: 0,
    },
    validationSchema: createEstateSchema,
    onSubmit: async (values) => {
      try {
        const response = await postRequest("/developer/estate/create", {
          ...values,
          completionDate: moment(values.completionDate).toISOString(),
        });
        if (response.statusCode === 200) {
          toast.success("Estate created successfull");
          setShowAddDoc(true);
        } else {
          toast.error(response.value.message);
        }
      } catch (error) {
        toast.error("An unexpected error occured");
      }
    },
  });

  const getCountry = async () => {
    try {
      const response = await getRequest("/public/country/get-all");
      setCountryOptions(
        response.value.value.data.map((country: any) => {
          return { label: country.name, name: country.id, selected: false };
        })
      );
      setFetchingCoutry(false);
    } catch (error) {}
  };
  const getState = async (coutryId: string) => {
    try {
      setFetchingState(true);
      const response = await getRequest(`/public/state/${coutryId}/get-all`);
      setStateOptions(
        response.value.value.data.map((state: any) => {
          return { label: state.name, name: state.id };
        })
      );
      setFetchingState(false);
    } catch (error) {}
  };

  const getCity = async (stateId: string) => {
    try {
      setFetchingCity(true);
      const response = await getRequest(`/public/city/${stateId}/get-all`);
      setCityOptions(
        response.value.value.data.map((city: any) => {
          return { label: city.name, name: city.id, selected: false };
        })
      );
      setFetchingCity(false);
    } catch (error) {}
  };
  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div>
      <div>
        {showAddDoc && (
          <div className="px-[40px]">
            <AddEstateBtn />
            <div className="flex items-center justify-start mt-4 gap-4">
              <SpaceCard />
              <SpaceCard />
            </div>
          </div>
        )}
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 pb-20 px-[40px]">
            <CustomInput
              onChange={formik.handleChange}
              placeholder="Johndoe@gmail.com"
              name="name"
              label="Name"
              value={formik.values.name}
              required={true}
              error={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : ""
              }
            />
            <Select
              label="Country"
              name="country"
              value={formik.values.country}
              onClick={(value: string, label: string) => {
                getState(value);
                formik.setValues({
                  ...formik.values,
                  country: value,
                });
              }}
              options={countryOptions}
              readOnly
              isloading={fetchingCountry}
              disabled={false}
              error={
                formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : ""
              }
            />
            <Select
              label="State"
              name="state"
              value={formik.values.state}
              onClick={(value: string, label: string) => {
                getCity(value);
                formik.setValues({
                  ...formik.values,
                  state: value,
                });
              }}
              options={StateOptions}
              readOnly
              isloading={fetchingState}
              error={
                formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : ""
              }
            />
            <Select
              label="City"
              name="city"
              value={formik.values.cityId}
              onClick={(value: string, label: string) => {
                formik.setValues({
                  ...formik.values,
                  cityId: value,
                });
              }}
              options={cityOptions}
              readOnly
              isloading={fetchingCity}
              error={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : ""
              }
            />
            <CustomInput
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder=""
              name="address"
              label="Address"
              required={true}
              error={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : ""
              }
            />
            <CalenderInput
              label="Completion Date"
              name="completionDate"
              value={`${moment(formik.values.completionDate).format(
                "DD/MM/YYYY"
              )}`}
              onClick={(value: string, label: string) => {
                formik.setValues({
                  ...formik.values,
                  completionDate: moment(value).toISOString(),
                });
              }}
              readOnly
              error={
                formik.touched.completionDate && formik.errors.completionDate
                  ? formik.errors.completionDate
                  : ""
              }
            />
            <CustomInput
              onChange={formik.handleChange}
              placeholder="Johndoe@gmail.com"
              name="videoUrl"
              label="Video Url"
              value={formik.values.videoUrl}
              error={
                formik.touched.videoUrl && formik.errors.videoUrl
                  ? formik.errors.videoUrl
                  : ""
              }
            />
            <Select
              onClick={(value: string, label: string) => {
                formik.setValues({
                  ...formik.values,
                  completionStatus: value,
                });
              }}
              value={formik.values.completionStatus}
              placeholder=""
              name={"completionStatus"}
              label="Status"
              options={[
                { name: " UNDER_CONSTRUCTION", label: "Under construction" },
                { name: " COMPLETED", label: "Completed" },
              ]}
              error={
                formik.touched.completionStatus &&
                formik.errors.completionStatus
                  ? formik.errors.completionStatus
                  : ""
              }
            />
            <Select
              onClick={(value: string, label: string) => {
                formik.setValues({
                  ...formik.values,
                  ownerType: value,
                });
              }}
              value={formik.values.ownerType}
              placeholder=""
              name={"ownerType"}
              label="Owner Type"
              options={[{ name: "DEVELOPER", label: "Developer" }]}
              error={
                formik.touched.ownerType && formik.errors.ownerType
                  ? formik.errors.ownerType
                  : ""
              }
            />
            <CustomInput
              placeholder="1"
              name="longitude"
              label="Longitude"
              value={`${formik.values.longitude}`}
              onChange={formik.handleChange}
              error={
                formik.touched.longitude && formik.errors.longitude
                  ? formik.errors.longitude
                  : ""
              }
            />
            <CustomInput
              placeholder=""
              name="latitude"
              label="Latitude"
              value={`${formik.values.latitude}`}
              onChange={formik.handleChange}
              error={
                formik.touched.latitude && formik.errors.latitude
                  ? formik.errors.latitude
                  : ""
              }
            />
            <CustomInput
              placeholder=""
              name="Completion Level"
              label="completionLevel"
              value={`${formik.values.completionLevel}`}
              onChange={formik.handleChange}
              error={
                formik.touched.completionLevel && formik.errors.completionLevel
                  ? formik.errors.completionLevel
                  : ""
              }
            />
            <CustomInput
              placeholder=""
              name="Land size"
              label="landSize"
              value={`${formik.values.landSize}`}
              onChange={formik.handleChange}
              error={
                formik.touched.landSize && formik.errors.landSize
                  ? formik.errors.landSize
                  : ""
              }
            />
            <CustomInput
              placeholder=""
              name="Floor"
              label="floors"
              value={`${formik.values.floors}`}
              onChange={formik.handleChange}
              error={
                formik.touched.floors && formik.errors.floors
                  ? formik.errors.floors
                  : ""
              }
            />
            <CustomInput
              placeholder=""
              name="description"
              label="Description"
              value={`${formik.values.description}`}
              onChange={formik.handleChange}
              error={
                formik.touched.description && formik.errors.description
                  ? formik.errors.description
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-center gap-6 fixed bottom-0 l-0 w-full bg-lightGray py-4">
            <CustomButton
              className="border-gray gap-2"
              variant="outline"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Cancel
            </CustomButton>
            <CustomButton
              isLoading={formik.isSubmitting}
              className="border-gray gap-2"
              variant="primary"
              onClick={formik.handleSubmit}
            >
              Create Estate
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};
