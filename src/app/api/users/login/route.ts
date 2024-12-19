import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    // Get data from the request
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log("Request Body:", reqBody);

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return NextResponse.json(
        { success: false, error: "User does not exist." },
        { status: 400 }
      );
    }

    console.log("User found:", user);

    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    console.log("Password validation result:", validPassword);

    if (!validPassword) {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 400 }
      );
    }

    // Token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Create token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "5h",
    });

    // Set token in cookies
    const response = NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    console.error("Error during login:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
