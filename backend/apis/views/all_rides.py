def all_rides_view(ride,car_model):
    return {

        "ride_start_time": ride.ride_start_time,
        "ride_end_time": ride.ride_end_time,
        "seats_offered": ride.seats_offere,
        "contribution_per_head": ride.contribution_per_head,
        "car_model": car_model
    }

    