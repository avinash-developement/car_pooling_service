def ride_view(ride):
    return {
        "ride_id": ride.id,
        "ride_start_time": ride.ride_start_time,
        "ride_end_time": ride.ride_end_time,
        "seats_offered": ride.seats_offered,
        "contribution_per_head": ride.contribution_per_head,
        #"car_model": car_model
    }
