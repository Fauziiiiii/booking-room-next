import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { AirVent, Coffee, Phone, Projector, Wifi } from 'lucide-react'
import React from 'react'

export default function AmmenitiesIcon() {
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Wifi width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>WiFi</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <AirVent width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Air Conditioner</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Coffee width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Coffee</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Projector width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Projector</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Phone width={16} height={16} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Phone</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}
