
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

const signUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignInValues = z.infer<typeof signInSchema>;
type SignUpValues = z.infer<typeof signUpSchema>;

const SignIn = () => {
  const [activeTab, setActiveTab] = useState<string>("signin");
  const navigate = useNavigate();
  const { toast } = useToast();

  const signInForm = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const signUpForm = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSignIn = (data: SignInValues) => {
    console.log("Sign in data:", data);
    toast({
      title: "Sign In Successful",
      description: "Welcome back to Chen Charts!",
    });
    navigate('/');
  };

  const onSignUp = (data: SignUpValues) => {
    console.log("Sign up data:", data);
    toast({
      title: "Registration Successful",
      description: "Your account has been created successfully!",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold mb-2">Welcome to Chen Charts</h1>
            <p className="text-muted-foreground">Sign in to your account or create a new one</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <Tabs defaultValue="signin" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Register</TabsTrigger>
              </TabsList>
              
              {/* Sign In Form */}
              <TabsContent value="signin">
                <Form {...signInForm}>
                  <form onSubmit={signInForm.handleSubmit(onSignIn)} className="space-y-6">
                    <FormField
                      control={signInForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={signInForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-center justify-between">
                      <FormField
                        control={signInForm.control}
                        name="rememberMe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">Remember me</FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <Link to="/forgot-password" className="text-sm text-chen-brown hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              
              {/* Sign Up Form */}
              <TabsContent value="signup">
                <Form {...signUpForm}>
                  <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="space-y-6">
                    <FormField
                      control={signUpForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={signUpForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={signUpForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={signUpForm.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              I agree to the{" "}
                              <Link to="/terms" className="text-chen-brown hover:underline">
                                terms and conditions
                              </Link>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;
