'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface LoginFormData {
  email: string;
  password: string;
}

interface SignUpFormData extends LoginFormData {
  confirmPassword: string;
  name: string;
  userType: 'individual' | 'corporate';
}

const MonthlyTagLogin: React.FC = () => {
  const [customerMode, setCustomerMode] = useState<'login' | 'signup'>('login');
  const [partnerMode, setPartnerMode] = useState<'login' | 'signup'>('login');
  
  const [customerLoginData, setCustomerLoginData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  
  const [customerSignUpData, setCustomerSignUpData] = useState<SignUpFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    userType: 'individual'
  });
  
  const [partnerLoginData, setPartnerLoginData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  
  const [partnerSignUpData, setPartnerSignUpData] = useState<SignUpFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    userType: 'individual'
  });

  const handleCustomerLogin = () => {
    console.log('Customer Login:', customerLoginData);
  };

  const handleCustomerSignUp = () => {
    console.log('Customer Sign Up:', customerSignUpData);
  };

  const handlePartnerLogin = () => {
    console.log('Partner Login:', partnerLoginData);
  };

  const handlePartnerSignUp = () => {
    console.log('Partner Sign Up:', partnerSignUpData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MT</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Monthly Tag</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Welcome to Monthly Tag</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The smart way to connect parking space owners with customers looking for convenient monthly parking solutions.
          </p>
        </div>

        {/* Login Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Customer Login Card */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-slate-900">Customer Login</CardTitle>
              <CardDescription className="text-slate-600">
                Find and reserve your perfect parking spot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {customerMode === 'login' ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-email">Email</Label>
                    <Input
                      id="customer-email"
                      type="email"
                      placeholder="Enter your email"
                      value={customerLoginData.email}
                      onChange={(e) => setCustomerLoginData({...customerLoginData, email: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-password">Password</Label>
                    <Input
                      id="customer-password"
                      type="password"
                      placeholder="Enter your password"
                      value={customerLoginData.password}
                      onChange={(e) => setCustomerLoginData({...customerLoginData, password: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <Button 
                    onClick={handleCustomerLogin}
                    className="w-full h-11 bg-blue-600 hover:bg-blue-700"
                  >
                    Sign In
                  </Button>
                  <div className="text-center space-y-2">
                    <Button variant="link" className="text-sm text-slate-600">
                      Forgot password?
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-signup-name">Full Name</Label>
                    <Input
                      id="customer-signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={customerSignUpData.name}
                      onChange={(e) => setCustomerSignUpData({...customerSignUpData, name: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-type">Account Type</Label>
                    <Select 
                      value={customerSignUpData.userType} 
                      onValueChange={(value: 'individual' | 'corporate') => 
                        setCustomerSignUpData({...customerSignUpData, userType: value})
                      }
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-signup-email">Email</Label>
                    <Input
                      id="customer-signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={customerSignUpData.email}
                      onChange={(e) => setCustomerSignUpData({...customerSignUpData, email: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-signup-password">Password</Label>
                    <Input
                      id="customer-signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={customerSignUpData.password}
                      onChange={(e) => setCustomerSignUpData({...customerSignUpData, password: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-confirm-password">Confirm Password</Label>
                    <Input
                      id="customer-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={customerSignUpData.confirmPassword}
                      onChange={(e) => setCustomerSignUpData({...customerSignUpData, confirmPassword: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <Button 
                    onClick={handleCustomerSignUp}
                    className="w-full h-11 bg-blue-600 hover:bg-blue-700"
                  >
                    Create Account
                  </Button>
                </div>
              )}
              
              <div className="text-center pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  {customerMode === 'login' ? "Don't have an account?" : "Already have an account?"}
                </p>
                <Button
                  variant="link"
                  onClick={() => setCustomerMode(customerMode === 'login' ? 'signup' : 'login')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {customerMode === 'login' ? 'Sign up' : 'Sign in'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Partner Login Card */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-slate-900">Partner Login</CardTitle>
              <CardDescription className="text-slate-600">
                Manage your parking spaces and earn revenue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {partnerMode === 'login' ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="partner-email">Email</Label>
                    <Input
                      id="partner-email"
                      type="email"
                      placeholder="Enter your email"
                      value={partnerLoginData.email}
                      onChange={(e) => setPartnerLoginData({...partnerLoginData, email: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-password">Password</Label>
                    <Input
                      id="partner-password"
                      type="password"
                      placeholder="Enter your password"
                      value={partnerLoginData.password}
                      onChange={(e) => setPartnerLoginData({...partnerLoginData, password: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <Button 
                    onClick={handlePartnerLogin}
                    className="w-full h-11 bg-emerald-600 hover:bg-emerald-700"
                  >
                    Sign In
                  </Button>
                  <div className="text-center space-y-2">
                    <Button variant="link" className="text-sm text-slate-600">
                      Forgot password?
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="partner-signup-name">Organization Name</Label>
                    <Input
                      id="partner-signup-name"
                      type="text"
                      placeholder="Enter organization name"
                      value={partnerSignUpData.name}
                      onChange={(e) => setPartnerSignUpData({...partnerSignUpData, name: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-type">Partner Type</Label>
                    <Select 
                      value={partnerSignUpData.userType} 
                      onValueChange={(value: 'individual' | 'corporate') => 
                        setPartnerSignUpData({...partnerSignUpData, userType: value})
                      }
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select partner type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-signup-email">Email</Label>
                    <Input
                      id="partner-signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={partnerSignUpData.email}
                      onChange={(e) => setPartnerSignUpData({...partnerSignUpData, email: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-signup-password">Password</Label>
                    <Input
                      id="partner-signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={partnerSignUpData.password}
                      onChange={(e) => setPartnerSignUpData({...partnerSignUpData, password: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-confirm-password">Confirm Password</Label>
                    <Input
                      id="partner-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={partnerSignUpData.confirmPassword}
                      onChange={(e) => setPartnerSignUpData({...partnerSignUpData, confirmPassword: e.target.value})}
                      className="h-11"
                    />
                  </div>
                  <Button 
                    onClick={handlePartnerSignUp}
                    className="w-full h-11 bg-emerald-600 hover:bg-emerald-700"
                  >
                    Create Account
                  </Button>
                  <div className="text-xs text-slate-500 text-center">
                    Partner accounts require admin approval
                  </div>
                </div>
              )}
              
              <div className="text-center pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  {partnerMode === 'login' ? "Don't have an account?" : "Already have an account?"}
                </p>
                <Button
                  variant="link"
                  onClick={() => setPartnerMode(partnerMode === 'login' ? 'signup' : 'login')}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  {partnerMode === 'login' ? 'Sign up' : 'Sign in'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTagLogin;