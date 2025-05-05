"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { 
  User, 
  Upload, 
  PhoneCall, 
  Mail, 
  Briefcase, 
  Target, 
  ActivitySquare,
  Plus,
  Loader2
} from "lucide-react"

const fitnessLevels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "athlete", label: "Athlete" }
]

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.coerce.number().min(16, { message: "Age must be at least 16." }).max(120, { message: "Age cannot exceed 120." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  profession: z.string().optional(),
  endGoal: z.string().min(5, { message: "End goal must be at least 5 characters." }),
  fitnessLevel: z.enum(["beginner", "intermediate", "advanced", "athlete"], {
    required_error: "Please select a fitness level."
  })
})

type FormValues = z.infer<typeof formSchema>

export default function AddUsersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: undefined,
      phone: "",
      email: "",
      profession: "",
      endGoal: "",
      fitnessLevel: undefined,
    },
  })
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    
    if (file) {
      setPhotoFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Create form data to handle file upload
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value))
      })
      
      if (photoFile) {
        formData.append("photo", photoFile)
      }
      
      // For demo purposes, log the form data (would be sent to API in production)
      console.log("Form submitted:", data, photoFile)
      
      // Show success alert and reset form
      alert("User added successfully!")
      form.reset()
      setPhotoFile(null)
      setPhotoPreview(null)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to add user. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Add New Member</h1>
        <p className="text-gray-500">Complete the form below to register a new gym member.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {/* Photo Upload */}
            <div className="flex flex-col items-center space-y-3 mb-6">
              <div className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center overflow-hidden bg-gray-50">
                {photoPreview ? (
                  <img 
                    src={photoPreview} 
                    alt="Profile preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="h-12 w-12 text-gray-400" />
                )}
              </div>
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-md cursor-pointer hover:bg-blue-100 transition-colors">
                <Upload className="h-4 w-4" />
                <span className="text-sm">Upload Photo</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handlePhotoChange}
                />
              </label>
            </div>
            
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="John Doe"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="25"
                  {...form.register("age")}
                />
                {form.formState.errors.age && (
                  <p className="text-sm text-red-500">{form.formState.errors.age.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="+1 (555) 000-0000"
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="johndoe@example.com"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Profession (Optional)
                </label>
                <input
                  id="profession"
                  type="text"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Engineer"
                  {...form.register("profession")}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="fitnessLevel" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <ActivitySquare className="h-4 w-4" />
                  Fitness Level
                </label>
                <select
                  id="fitnessLevel"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...form.register("fitnessLevel")}
                  defaultValue=""
                >
                  <option value="" disabled>Select a level</option>
                  {fitnessLevels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
                {form.formState.errors.fitnessLevel && (
                  <p className="text-sm text-red-500">{form.formState.errors.fitnessLevel.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="endGoal" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <Target className="h-4 w-4" />
                End Goal
              </label>
              <textarea
                id="endGoal"
                rows={3}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="What does this member want to achieve? e.g. Lose weight, build muscle, etc."
                {...form.register("endGoal")}
              />
              {form.formState.errors.endGoal && (
                <p className="text-sm text-red-500">{form.formState.errors.endGoal.message}</p>
              )}
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              className="mr-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => form.reset()}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Member
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 