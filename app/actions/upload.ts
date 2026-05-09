"use server";

import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

// Note: Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use service role for admin bypass, or anon if using RLS

const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("No file provided");
    }

    const fileExtension = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    
    // Convert File to ArrayBuffer and then to Buffer for upload
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data, error } = await supabase.storage
      .from("uploads") // Target the 'uploads' bucket
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error("Supabase Upload Error:", error);
      throw new Error("Failed to upload image");
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from("uploads")
      .getPublicUrl(data.path);

    return { url: publicUrl, success: true };
  } catch (error) {
    console.error("Action error:", error);
    return { success: false, error: "Upload failed" };
  }
}
