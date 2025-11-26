import expressAsyncHandler from "express-async-handler";
import AddressModel from "../../models/address.model.js";
import ApiResponse from "../../utils/ApiResponse.util.js";
import CustomError from "../../utils/CustomError.util.js";


export const addAddress = expressAsyncHandler(async (req, res, next) => {
  const { addressLine, city, state, pinCode, phone, notes } = req.body;

  // Create new address with userId from authenticated user
  const newAddress = await AddressModel.create({
    addressLine,
    city,
    state,
    pinCode,
    phone,
    notes,
    userId: req.myUser._id,
  });


  new ApiResponse(201, "Address Added Successfully", newAddress).send(res);
});

//! get all address

export const getAddresses = expressAsyncHandler(async (req, res, next) => {
  
  const addresses = await AddressModel.find({ userId: req.myUser._id }).sort({
    createdAt: -1, // Sort
  });

  new ApiResponse(
    200,
    "Addresses Fetched Successfully",
    addresses
  ).send(res);
});

//! Get single address

export const getAddress = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const address = await AddressModel.findOne({
    _id: id,
    userId: req.myUser._id, 
  });

  if (!address) {
    return next(new CustomError(404, "Address Not Found"));
  }

  new ApiResponse(200, "Address Fetched Successfully", address).send(res);
});

//! Update address
export const updateAddress = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const updatedAddress = await AddressModel.findOneAndUpdate(
    {
      _id: id,
      userId: req.myUser._id, 
    },
    req.body, 
    {
      new: true, 
      runValidators: true, 
    }
  );

  if (!updatedAddress) {
    return next(new CustomError(404, "Address Not Found"));
  }

  new ApiResponse(200, "Address Updated Successfully", updatedAddress).send(
    res
  );
});

//! Delete address

export const deleteAddress = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const deletedAddress = await AddressModel.findOneAndDelete({
    _id: id,
    userId: req.myUser._id,
  });

  if (!deletedAddress) {
    return next(new CustomError(404, "Address Not Found"));
  }

  new ApiResponse(200, "Address Deleted Successfully").send(res);
});