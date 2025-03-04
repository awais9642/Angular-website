import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    // Ensure this runs only on the client side (browser)
    if (isPlatformBrowser(this.platformId)) {
      const ctx = document.getElementById('trafficChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Website Traffic',
                data: [120, 190, 300, 500, 200, 300],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }
  }
}
