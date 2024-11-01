"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building2, MoreVertical, Plus, Grid2X2, List, PenSquare, Trash2, Users } from 'lucide-react';

// Types
interface Floor {
  id: string;
  name: string;
  level: number;
  totalRooms: number;
  capacity: number;
  status: 'active' | 'maintenance' | 'inactive';
  companies: string[];
}

interface BuildingDetail {
  id: string;
  name: string;
  address: string;
  totalFloors: number;
  floors: Floor[];
}

export default function BuildingFloorManagement() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  // Sample data - replace with actual API call
  const buildingDetail: BuildingDetail = {
    id: "1",
    name: "Corporate Tower A",
    address: "123 Business District",
    totalFloors: 12,
    floors: [
      {
        id: "1",
        name: "Ground Floor",
        level: 0,
        totalRooms: 8,
        capacity: 100,
        status: 'active',
        companies: ['Company A', 'Company B']
      },
      {
        id: "2",
        name: "Level 1",
        level: 1,
        totalRooms: 12,
        capacity: 150,
        status: 'active',
        companies: ['Company C']
      },
      // Add more floors...
    ]
  };

  const getStatusColor = (status: Floor['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'maintenance':
        return 'bg-yellow-500';
      case 'inactive':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {buildingDetail.floors.map((floor) => (
        <Card key={floor.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">{floor.name}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push(`/floors/${floor.id}`)}>
                  <PenSquare className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-red-600"
                  onClick={() => console.log('Delete floor:', floor.id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Level</span>
                <span className="font-medium">{floor.level}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Rooms</span>
                <span className="font-medium">{floor.totalRooms}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Capacity</span>
                <span className="font-medium">{floor.capacity} people</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge className={getStatusColor(floor.status)}>
                  {floor.status.charAt(0).toUpperCase() + floor.status.slice(1)}
                </Badge>
              </div>
              <div className="pt-2">
                <div className="text-sm text-muted-foreground mb-1">Companies</div>
                <div className="flex flex-wrap gap-1">
                  {floor.companies.map((company) => (
                    <Badge key={company} variant="outline">
                      {company}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Floor Name</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Rooms</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Companies</TableHead>
            <TableHead className="text-left">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {buildingDetail.floors.map((floor) => (
            <TableRow key={floor.id}>
              <TableCell className="font-medium">{floor.name}</TableCell>
              <TableCell>{floor.level}</TableCell>
              <TableCell>{floor.totalRooms}</TableCell>
              <TableCell>{floor.capacity}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(floor.status)}>
                  {floor.status.charAt(0).toUpperCase() + floor.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {floor.companies.map((company) => (
                    <Badge key={company} variant="outline">
                      {company}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-left">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => router.push(`/floors/${floor.id}`)}>
                      <PenSquare className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-red-600"
                      onClick={() => console.log('Delete floor:', floor.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Building Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Building2 className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">{buildingDetail.name}</h1>
            <p className="text-muted-foreground">{buildingDetail.address}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          >
            {viewMode === 'grid' ? (
              <List className="h-4 w-4" />
            ) : (
              <Grid2X2 className="h-4 w-4" />
            )}
          </Button>
          <Button onClick={() => router.push('/floors/new')}>
            <Plus className="mr-2 h-4 w-4" />
            Add Floor
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Floors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{buildingDetail.totalFloors}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {buildingDetail.floors.reduce((sum, floor) => sum + floor.capacity, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(buildingDetail.floors.flatMap(floor => floor.companies)).size}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview" onClick={() => setActiveTab('overview')}>
            Overview
          </TabsTrigger>
          <TabsTrigger value="companies" onClick={() => setActiveTab('companies')}>
            Companies
          </TabsTrigger>
          <TabsTrigger value="maintenance" onClick={() => setActiveTab('maintenance')}>
            Maintenance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {viewMode === 'grid' ? <GridView /> : <ListView />}
        </TabsContent>

        <TabsContent value="companies">
          {/* Companies content */}
        </TabsContent>

        <TabsContent value="maintenance">
          {/* Maintenance content */}
        </TabsContent>
      </Tabs>
    </div>
  );
}