'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { profileSchema, type ProfileFormValues } from '@/lib/form-schema';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangleIcon, Trash, Trash2Icon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

interface ProfileFormType {
  initialData: any | null;
  categories: any;
}

export const CreateProfileOne: React.FC<ProfileFormType> = ({
  initialData,
  categories
}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const title = initialData ? 'Edit product' : 'Create Your Profile';
  const description = initialData
    ? 'Edit a product.'
    : 'To create your resume, we first need some basic information about you.';


  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});


  const defaultValues = {
    jobs: [
      {
        jobtitle: '',
        employer: '',
        startdate: '',
        enddate: '',
        jobcountry: '',
        jobcity: ''
      }
    ]
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: 'onChange'
  });

  const {
    control,
    formState: { errors }
  } = form;

  const { append, remove, fields } = useFieldArray({
    control,
    name: 'jobs'
  });

  // const onSubmit = async (data: ProfileFormValues) => {
  //   try {
  //     setLoading(true);
  //     if (initialData) {
  //       // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
  //     } else {
  //       // const res = await axios.post(`/api/products/create-product`, data);
  //       // console.log("product", res);
  //     }
  //     router.refresh();
  //     router.push(`/dashboard/products`);
  //   } catch (error: any) {
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const onDelete = async () => {
  //   try {
  //     setLoading(true);
  //     //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
  //     router.refresh();
  //     router.push(`/${params.storeId}/products`);
  //   } catch (error: any) {
  //   } finally {
  //     setLoading(false);
  //     setOpen(false);
  //   }
  // };

  const processForm: SubmitHandler<ProfileFormValues> = (data) => {
    console.log('data ==>', data);
    setData(data);
    // api call and reset
    // form.reset();
  };

  type FieldName = keyof ProfileFormValues;

  const steps = [
    {
      id: 'Step 1',
      name: 'Personal Information',
      fields: ['firstname', 'lastname', 'email', 'contactno', 'country', 'city']
    },
    {
      id: 'Step 2',
      name: 'Professional Informations',
      // fields are mapping and flattening for the error to be trigger  for the dynamic fields
      fields: fields
        ?.map((_, index) => [
          `jobs.${index}.jobtitle`,
          `jobs.${index}.employer`,
          `jobs.${index}.startdate`,
          `jobs.${index}.enddate`,
          `jobs.${index}.jobcountry`,
          `jobs.${index}.jobcity`
          // Add other field names as needed
        ])
        .flat()
    },
    { id: 'Step 3', name: 'Complete' }
  ];

  const next = async () => {
    const fields = steps[currentStep].fields;

    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true
    });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await form.handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const countries = [{ id: 'wow', name: 'india' }];
  const cities = [{ id: '2', name: 'kerala' }];

  return (
    <>
      <div></div>
    </>
  );
};
