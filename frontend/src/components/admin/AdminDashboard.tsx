import { useGetAllLeads, useGetAllAppointments } from '../../hooks/useAdminQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, Calendar, TrendingUp, Loader2 } from 'lucide-react';

export default function AdminDashboard() {
  const { data: leads = [], isLoading: leadsLoading } = useGetAllLeads();
  const { data: appointments = [], isLoading: appointmentsLoading } = useGetAllAppointments();

  // Calculate metrics
  const totalLeads = leads.length;
  
  const now = Date.now();
  const last24Hours = now - 24 * 60 * 60 * 1000;
  const newLeadsToday = 0; // Note: Backend doesn't store submission timestamp, so we can't calculate this accurately
  
  const totalAppointments = appointments.length;
  const conversionRate = totalLeads > 0 ? ((totalAppointments / totalLeads) * 100).toFixed(1) : '0.0';

  const stats = [
    {
      title: 'Total Leads',
      value: totalLeads,
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      title: 'New Leads (24h)',
      value: newLeadsToday,
      icon: UserPlus,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      title: 'Total Appointments',
      value: totalAppointments,
      icon: Calendar,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      title: 'Conversion Rate',
      value: `${conversionRate}%`,
      icon: TrendingUp,
      color: 'text-gold-accent',
      bgColor: 'bg-gold-accent/10',
    },
  ];

  if (leadsLoading || appointmentsLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-gold-accent animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-serif font-bold text-white mb-2">Dashboard</h2>
        <p className="text-white/70 font-sans">Overview of your insurance business metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-navy-secondary border-gold-accent/30 hover-lift">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-sans font-medium text-white/70">
                {stat.title}
              </CardTitle>
              <div className={`w-10 h-10 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif font-bold text-white">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-navy-secondary border-gold-accent/30">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leads.length === 0 ? (
                <p className="text-white/60 font-sans text-center py-8">No leads yet</p>
              ) : (
                leads.slice(0, 5).map((lead, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-navy-primary/50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gold-accent/10 flex items-center justify-center border border-gold-accent/30">
                      <Users className="w-5 h-5 text-gold-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-sans font-medium">{lead.fullName}</p>
                      <p className="text-white/60 text-sm">{lead.email}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-navy-secondary border-gold-accent/30">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-white">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.length === 0 ? (
                <p className="text-white/60 font-sans text-center py-8">No appointments scheduled</p>
              ) : (
                appointments
                  .filter((apt) => apt.status === 'scheduled')
                  .slice(0, 5)
                  .map((appointment) => (
                    <div key={Number(appointment.id)} className="flex items-center gap-4 p-3 bg-navy-primary/50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center border border-blue-400/30">
                        <Calendar className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-sans font-medium">{appointment.clientName}</p>
                        <p className="text-white/60 text-sm">
                          {new Date(Number(appointment.date) / 1000000).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
