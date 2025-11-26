import { Router } from "express";
import {
  addAddress,
  deleteAddress,
  getAddress,
  getAddresses,
  updateAddress,
} from "../../controllers/shop/address.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { addAddressSchema, updateAddressSchema } from "../../validators/address.validators.js";

const router = Router();


router.post("/", validate(addAddressSchema), authenticate, addAddress);

router.get("/", authenticate, getAddresses);

router.get("/:id", authenticate, getAddress);

router.patch("/:id",validate(updateAddressSchema),authenticate,updateAddress);

router.delete("/:id", authenticate, deleteAddress);

export default router;