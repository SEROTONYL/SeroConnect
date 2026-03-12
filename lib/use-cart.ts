"use client";

import { useEffect, useState } from "react";
import { servicePackages, type ServicePackage } from "@/lib/service-packages";

const STORAGE_KEY = "seroconnect.selected-package";

function findPackageById(packageId: string | null): ServicePackage | null {
  if (!packageId) {
    return null;
  }

  return servicePackages.find((item) => item.id === packageId) ?? null;
}

export function useCart() {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedPackageId = window.localStorage.getItem(STORAGE_KEY);
    const storedPackage = findPackageById(storedPackageId);

    setSelectedPackageId(storedPackage?.id ?? null);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (!selectedPackageId) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, selectedPackageId);
  }, [isReady, selectedPackageId]);

  return {
    isReady,
    selectedPackage: findPackageById(selectedPackageId),
    setSelectedPackage: setSelectedPackageId,
  };
}
